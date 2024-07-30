<template>
  <main>
    <a-calendar @panelChange="onPanelChange" @select="onSelect"  />
     <a-drawer
     :width="720"
      v-model:open="open"
    class="custom-class"
    root-class-name="root-class-name"
    :root-style="{ color: 'blue' }"
    style="color: red"
    title="Thêm việc cần làm"
    placement="right"
    @after-open-change="afterOpenChange"
  >
    <a-form
    :form="form"
     @submit="handleSubmit"
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Việc cần làm"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="loại"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input v-model:value="formState.password" />
    </a-form-item>
       <a-form-item
      label="loại"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input v-model:value="formState.password" />
    </a-form-item>


   

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
  </a-drawer>
  </main>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
import { reactive } from 'vue';
// calendar
const date = ref<Dayjs>()
const onPanelChange = (value:Dayjs, mode:string) => {
  console.log(value, mode);
 
};
const onSelect = (date, { source }) => {
  console.log('44',source)
    if (source === 'date') {
     showDrawer()
    }
  };
// end calendar
// drawer
const open = ref(false);
const afterOpenChange = bool => {
  console.log('open', bool);
};
const showDrawer = () => {
  open.value = true;
};

// end drawer
// form
const formState = reactive({
  username: '',
  password: '',
  remember: true,
});
const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
// end form
const handleSubmit = () => {
  console.log('444')
}
</script>
