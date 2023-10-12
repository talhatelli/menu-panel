<template>
  <div class="full-screen-form">
    <a-card style="width: 100%; height: 100vh">
      <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
        <div class="form-infos">
          <a-form-item label="Category Name" v-bind="validateInfos.name">
            <a-input name="name" v-model:value="modelRef.name" />
          </a-form-item>
        </div>
        <a-divider orientation="left">
          <a-form-item :wrapper-col="{span: 14, offset: 1}">
            <a-button type="primary" @click="onSubmit"> Submit </a-button>
            <a-button style="margin-left: 10px" @click="resetFields"> Clean </a-button>
          </a-form-item>
        </a-divider>
      </a-form>
    </a-card>
  </div>
</template>

<script>
import {ref, onMounted} from "vue"
import {message} from "ant-design-vue"
import {reactive, defineComponent} from "vue"
import {Form} from "ant-design-vue"
import {category} from "@/stores/categoryListStore"

import "./style.css"

const useForm = Form.useForm

export default defineComponent({
  name: "categories-create",

  setup() {
    const create = category()

    const modelRef = reactive({
      name: ""
    })
    const rulesRef = reactive({
      name: [
        {
          required: true,
          message: "Please enter the name of the product."
        },
        {min: 3, max: 250, message: "Length should be 3 to 250"}
      ]
    })
    const {resetFields, validate, validateInfos} = useForm(modelRef, rulesRef)
    const onSubmit = e => {
      e.preventDefault()
      validate().then(() => {
        create.newCategory(modelRef)
        resetFields()
      })
    }
    return {
      labelCol: {span: 24},
      wrapperCol: {span: 23},
      validate,
      validateInfos,
      resetFields,
      modelRef,
      onSubmit
    }
  }
})
</script>
