<template>
    <div class="full-screen-form ">
        <a-card class="general_card add_form" :bordered="false" :loading="loading" title="Product Add">
            <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-divider orientation="left">Info Product</a-divider>
                <div class="channel_infos">
                    <a-form-item label="Name" v-bind="validateInfos.name">
                        <a-input name="company_name" v-model:value="modelRef.name" />
                    </a-form-item>
                    <a-form-item label="Description" v-bind="validateInfos.description">
                        <a-input name="description" v-model:value="modelRef.description" />
                    </a-form-item>
                    <a-form-item label="Image Url" v-bind="validateInfos.imageUrl">
                        <a-input name="imageUrl" v-model:value="modelRef.imageUrl" placeholder="https://..." />
                    </a-form-item>
                    <a-form-item label="Categories" v-bind="validateInfos.categories">
                        <a-input name="categories" v-model:value="modelRef.categories" />
                    </a-form-item>
                    <a-form-item label="Price" v-bind="validateInfos.price">
                        <a-input name="price" v-model:value="modelRef.price" placeholder="100tl" />
                    </a-form-item>
                </div>
                <a-divider orientation="left">
                    <a-form-item :wrapper-col="{ span: 14, offset: 1 }">
                        <a-button type="primary" @click="onSubmit">
                            Submit
                        </a-button>
                        <a-button style="margin-left: 10px;" @click="resetFields">
                            Clean
                        </a-button>
                    </a-form-item>
                </a-divider>
            </a-form>
        </a-card>
    </div>
</template>
  
  
<script>
import { EditFilled } from '@ant-design/icons-vue';

import { reactive, defineComponent } from 'vue';
import { Form } from "ant-design-vue";
import { menuItemFormStore } from "@/stores/menuItemFormStore"

const useForm = Form.useForm;

export default defineComponent({

    name: 'menu-item-form',
    components: {
        EditFilled,
    },
    data() {
        return {
            loading: false,
            company: []
        }
    },
    mounted() {

    },
    setup() {
        const store = menuItemFormStore()

        const modelRef = reactive({
            name: "",
            description: "",
            imageUrl: "",
            categories: "",
            price: "",
        });
        const rulesRef = reactive({
            name: [
                {
                    required: true,
                    message: 'Please enter the name of the product.'
                }
            ],
            description: [
                {
                    required: true,
                    message: 'Please enter the product description.'
                }
            ],
            imageUrl: [
                {
                    required: true,
                    message: 'Please enter the picture of the product.'
                }
            ],
            categories: [
                {
                    required: true,
                    message: 'Please enter the category of the product as id.'
                }
            ],
            price: [
                {
                    required: true,
                    message: 'Please enter the price of the product.'
                }
            ],
        });
        const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef);
        const onSubmit = e => {
            e.preventDefault();
            validate()
                .then(() => {
                    store.NewMenuItem(modelRef)
                })
        };
        return {
            labelCol: { span: 24 },
            wrapperCol: { span: 23 },
            validate,
            validateInfos,
            resetFields,
            modelRef,
            onSubmit,
        };
    },
});
</script>
  
<style scoped>
.full-screen-form {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background-color: #f0f0f0;
    /* Opsiyonel: Arkaplan rengi */
}

.ant-card-body {
    max-height: calc(100vh - 57px);
    overflow-y: auto;
}

.ant-card-head {
    background: #1890ff;
    border: 0;
}

.ant-card-head-wrapper {
    flex-direction: row-reverse;
    color: #fff;
}

.ant-card-extra {
    margin-right: 15px;
    color: #fff;
}

.channel_infos {
    display: flex;
    flex-wrap: wrap;
    padding: 0 40px;

    .ant-form-item {
        width: 50%;
        display: flex;

        .ant-form-item-label {
            max-width: none;
            flex: 100%;
            text-align: left;
        }

        .ant-form-item-control-wrapper {
            max-width: none;
            flex: 0 0 95%;
        }
    }
}
</style>