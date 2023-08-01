<template>
    <a-form class="form-container " :model="formState" v-bind="layout" name="nest-messages"
        :validate-messages="validateMessages" @finish="onFinish">
        <a-form-item :name="['user', 'name']">
            <label class="label">Name</label>
            <a-input v-model:value="formState.user.name" />
        </a-form-item>
        <a-form-item style="width: 70v;" :name="['user', 'description']">
            <label class="label">Description</label>
            <a-input v-model:value="formState.user.description" />
        </a-form-item>
        <a-form-item :name="['user', 'website']">
            <label class="label">Image Url</label>
            <a-input v-model:value="formState.user.imgUrl" />
        </a-form-item>
        <a-form-item :name="['user', 'categories']">
            <label class="label">Categories</label>
            <a-input v-model:value="formState.user.categories" />
        </a-form-item>
        <a-form-item :name="['user', 'price']">
            <label class="label">Price</label>
            <a-input v-model:value="formState.user.price" />
        </a-form-item>
        <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
            <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
    </a-form>
</template>
  
<script lang="ts" setup>

import { reactive } from 'vue';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const formState = reactive({
    user: {
        name: '',
        description: '',
        imgUrl: '',
        categories: '',
        price: '',
    },
});
const onFinish = (values: any) => {
    console.log('Success:', values);
};


</script>
<style>
.form-container {
    margin-inline: auto;
    height: 100vh;
}

.a-form {
    max-width: 400px;
    width: 100%;
}

.a-form-item {
    display: flex;
    flex-direction: column;
    /* Etiketleri ve inputları alt alta düzenle */
    margin-bottom: 16px;
}

.label {
    color: #000000;
    font-weight: bold;
    margin-bottom: 4px;
}
</style>
