<template>
  <div class="register-form">
    <a-form :form="form" @submit="handleSubmit">
    <router-link to="/login">登录</router-link>
    <router-link to="/register">/注册</router-link>
      <a-form-item v-bind="formItemLayout">
        <span slot="label"> 用户名&nbsp; </span>
        <a-input
          v-decorator="[
            'username',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true,
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="电子邮件">
        <a-input
          v-decorator="[
            'email',
            {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="密码" has-feedback>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: validateToNextPassword,
                },
              ],
            },
          ]"
          type="password"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="确认密码" has-feedback>
        <a-input
          v-decorator="[
            'confirm',
            {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: compareToFirstPassword,
                },
              ],
            },
          ]"
          type="password"
          @blur="handleConfirmBlur"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="验证码">
        <a-row :gutter="8">
          <a-col :span="12">
            <a-input
              v-decorator="[
                'code',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please input the captcha you got!',
                    },
                  ],
                },
              ]"
            />
          </a-col>
          <a-col :span="12">
            <a-button @click="getword()">获取验证码</a-button>
          </a-col>
        </a-row>
      </a-form-item>
      <a-form-item v-bind="tailFormItemLayout">
        <a-button type="primary" html-type="submit">注册</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import api from '@/api/user';

export default {
  data() {
    return {
      confirmDirty: false,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
  },
  methods: {
    getword() {
      console.log(this.form.getFieldValue('email'));
      api.getCode({ email: this.form.getFieldValue('email') }).then((res) => {
        window.console.log(res);
      });
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err) => {
        if (!err) {
          api
            .register({
              email: this.form.getFieldValue('email'),
              password: this.form.getFieldValue('password'),
              code: this.form.getFieldValue('code'),
              username: this.form.getFieldValue('username'),
            })
            .then((res) => {
              alert(res);
            }).catch((error) => {
              this.$message.error(error);
            });
        }
      });
    },
    handleConfirmBlur(e) {
      const { value } = e.target;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const { form } = this;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const { form } = this;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
  },
};
</script>

<style>
@import url("~@/assets/css/register.less");
</style>
