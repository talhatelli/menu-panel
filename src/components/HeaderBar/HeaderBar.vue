<template>
  <a-layout-header class="header-container">
    <div class="icon-container">
      <div class="logo" />
    </div>

    <a-dropdown>
      <template #overlay>
        <a-menu>
          <a-menu-item @click="showChangePasswordModal">
            <UserOutlined />
            Change Password
          </a-menu-item>
          <a-menu-item @click="handleLogout">
            <UserOutlined />
            Log out
          </a-menu-item>
        </a-menu>
      </template>
      <div class="email-dropdown-container">
        <div class="icon-user" />
        <div class="email-dropdown">
          {{ mail }}
        </div>
      </div>
    </a-dropdown>
    <a-modal v-model:visible="isChangePasswordModalVisible" title="Change Password" @ok="handleOk" @cancel="handleCancel">
      <a-form
        layout="vertical"
        :model="formState"
        :rules="rules"
        ref="formRef"
      >
        <a-form-item label="Email" name="email">
          <a-input v-model:value="formState.email" disabled />
        </a-form-item>
        <a-form-item label="Current Password" name="currentPassword">
          <a-input-password v-model:value="formState.currentPassword" placeholder="Current password" />
        </a-form-item>
        <a-form-item label="New Password" name="newPassword">
          <a-input-password v-model:value="formState.newPassword" placeholder="New password" />
        </a-form-item>
        <a-form-item label="Confirm New Password" name="confirmNewPassword">
          <a-input-password v-model:value="formState.confirmNewPassword" placeholder="Confirm new password" />
        </a-form-item>
      </a-form>
    </a-modal>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { loginStore } from '@/stores/loginStore';
import './style.css';

export default defineComponent({
  setup() {
    const store = loginStore();
    const router = useRouter();
    const mail = ref(localStorage.getItem('email'));
    const isChangePasswordModalVisible = ref(false);
    const formRef = ref(null);

    const formState = ref({
      email: mail.value,
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    });

    const rules = {
      currentPassword: [
        { required: true, message: 'Please input your current password', trigger: 'blur' },
      ],
      newPassword: [
        { required: true, message: 'Please input your new password', trigger: 'blur' },
      ],
      confirmNewPassword: [
        { required: true, message: 'Please confirm your new password', trigger: 'blur' },
        { validator: (rule, value, callback) => {
            if (value !== formState.value.newPassword) {
              callback('The two passwords do not match');
            } else {
              callback();
            }
          },
          trigger: 'blur'
        },
      ],
    };

    const handleLogout = async () => {
      await localStorage.setItem('token', '');
      await router.push('/login');
      await location.reload();
    };

    const showChangePasswordModal = () => {
      isChangePasswordModalVisible.value = true;
    };

    const handleChangePassword = async () => {
      try {
        await store.fetchChangePassword({
          email: formState.value.email,
          currentPassword: formState.value.currentPassword,
          newPassword: formState.value.newPassword,
        });
        // Formu sıfırla
        formState.value.currentPassword = '';
        formState.value.newPassword = '';
        formState.value.confirmNewPassword = '';
        isChangePasswordModalVisible.value = false;
      } catch (error) {
        console.error(error);
      }
    };

    const handleOk = () => {
      formRef.value.validate().then(() => {
        handleChangePassword();
      }).catch((error) => {
        console.error('Validation failed:', error);
      });
    };

    const handleCancel = () => {
      isChangePasswordModalVisible.value = false;
    };

    return {
      mail,
      isChangePasswordModalVisible,
      formState,
      rules,
      formRef,
      handleLogout,
      showChangePasswordModal,
      handleOk,
      handleCancel,
    };
  },
});
</script>
