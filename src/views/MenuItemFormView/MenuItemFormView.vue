<template>
  <div class="full-screen-form">
    <a-card style="width: 100%; height: 100vh">
      <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
        <div class="form-infos">
          <a-form-item label="Name" v-bind="validateInfos.name">
            <a-input name="company_name" v-model:value="modelRef.name" />
          </a-form-item>
          <a-form-item label="Description">
            <a-input name="description" v-model:value="modelRef.description" />
          </a-form-item>
          <a-form-item label="Image Url" v-bind="validateInfos.imageUrl">
            <a-input name="imageUrl" v-model:value="modelRef.imageUrl" placeholder="https://..." />
          </a-form-item>
          <a-form-item label="Categories" v-bind="validateInfos.categories"
            style="width: 100%; max-height: 300px; overflow-y: auto">
            <a-select v-model:value="modelRef.categories" mode="multiple" placeholder="Select the Category"
              :options="formattedOptions">
            </a-select>
          </a-form-item>
          <a-form-item label="Price" v-bind="validateInfos.price">
            <a-input name="price" type="number" v-model:value="modelRef.price" placeholder="100" />
          </a-form-item>
        </div>
        <a-divider orientation="left">
          <a-form-item :wrapper-col="{ span: 14, offset: 1 }">
            <a-button type="primary" @click="onSubmit"> Submit </a-button>
            <a-button style="margin-left: 10px" @click="resetFields"> Clean </a-button>
          </a-form-item>
        </a-divider>
      </a-form>
    </a-card>
  </div>
</template>

<script>
import { ref, onMounted } from "vue"
import { message } from "ant-design-vue"
import { reactive, defineComponent } from "vue"
import { Form } from "ant-design-vue"
import { menuItem } from "@/stores/menuItem"
import { category } from "@/stores/category"
import "./style.css"

const useForm = Form.useForm

export default defineComponent({
  name: "menu-item-form",

  setup() {
    const categoryList = category()
    const store = menuItem()

    const formattedOptions = ref([])
    const data = ref([])
    onMounted(async () => {
      await categoryList.fetchCategories()
      const items = categoryList.getCategories
      data.value = items.map(item => {
        return {
          label: item.name,
          value: item._id
        }
      })
      formattedOptions.value = data.value
    })

    const modelRef = reactive({
      name: "",
      description: "",
      imageUrl: "",
      categories: [],
      price: ""
    })
    const rulesRef = reactive({
      name: [
        {
          required: true,
          message: "Please enter the name of the product.",

        },
        { min: 3, max: 5, message: 'Length should be 3 to 250', },
      ],
      imageUrl: [
        { type: "url", message: 'Please enter a valid URL', },
      ],

      categories: [
        {
          required: true,
          message: "Please enter the category of the product as id."
        }
      ],
      price: [

        { min: 1, type: "number", message: 'It should be positive', }, {
          required: true,
          message: "Please enter the price of the product."
        },
      ]
    })
    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef)
    const onSubmit = e => {
      e.preventDefault()
      validate().then(() => {
        store.newMenuItem(modelRef)
        resetFields()
        message.success("Added Successfully")
      })
    }


    return {
      labelCol: { span: 24 },
      wrapperCol: { span: 23 },
      validate,
      validateInfos,
      resetFields,
      modelRef,
      onSubmit,
      formattedOptions,
      data,
    }
  }
})
</script>
