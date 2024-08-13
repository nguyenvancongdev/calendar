<template>
  <main>
    <a-calendar @panelChange="onPanelChange" @select="onSelect">
      <template #dateCellRender="{ current }">
      <ul class="events">
        <li>
         test
        </li>
      </ul>
    </template>
    
    </a-calendar>
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
      name="name"
      :rules="[{ required: true, message: 'Cần nhập việc cần làm' }]"
    >
      <a-input v-model:value="formState.name" />
    </a-form-item>

    <a-form-item
      label="Tiến độ"
      name="progress"
      :rules="[{ required: true, message: 'Lựa chọn tiến độ' }]"
    >
       <a-select
      ref="select"
      v-model:value="formState.progress"
     
      @focus="focus"
      @change="handleChange"
    >
      <a-select-option value="todo">Chưa triển khai</a-select-option>
      <a-select-option value="inProgress">Đang tiến hành</a-select-option>
      <a-select-option value="done">Hoàn thành</a-select-option>
    </a-select>
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
const mokeData = ref([{
  name: 'lịch',
  type: 'loại',
  progress: 'todo',
  milliSeconds: '...', // chuyển thành miligiay cho dong bo
}])
const getListData = (value: Dayjs) => {
  let startDay = value.startOf('day').valueOf()
  let data = mokeData.find(item => item.milliSeconds === startDay )
  return {}
}
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
    name : 'test',
    progress : 'todo',
  }
  initForm(valueForm);
  open.value = true;
};


// end drawer
// form
// form
const resetForm = () => {
    formState.name = '';
    formState.progress = 'todo';
}
const initForm = (value) => {
    formState.name = value.name;
    formState.progress = value.progress;
}
const formState = reactive({
  name: '',
  progress: '',
});
const onFinish = values => {
  console.log('Success:', values);
  // call api tạo lịch
};

</script>
<!-- // milliSeconds -->
<!-- // listTodo:
[{
   name: 'lịch',
   type: 'loại',
   progress: 'todo',
}]

 -->
