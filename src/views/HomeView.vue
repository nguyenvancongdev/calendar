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
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
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
  console.log('day là tính năng log')
  // mình sẽ call api tại đây
  // chuyển datejs thành 

 
};
const onSelect = (date, { source }) => {
    if (source === 'date') {
     showDrawer()
    }
};
// end calendar
// drawer
const open = ref(false);
const afterOpenChange = bool => {
  console.log('open', bool);
  if (bool === false){
    resetForm()
  }
};
const mode = ref('view');
const showDrawer = () => {
  // resetForm
  let valueForm = {
    username : 'test',
    password : 'test',
    remember : false,
  }
  initForm(valueForm);
  open.value = true;
};

const resetForm = () => {
    formState.username = '';
    formState.password = '';
    formState.remember = false;
}
const initForm = (value) => {
    formState.username = value.username;
    formState.password = value.password;
    formState.remember = value.remember;
}

// end drawer
// form
const formState = reactive({
  username: '',
  password: '',
  remember: true,
});
const onFinish = values => {
  console.log('Success:', values);
  // call api tạo lịch
};

</script>
