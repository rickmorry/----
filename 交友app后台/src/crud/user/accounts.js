export const accounts = {
  border: true,
  selection: true,
  index: false,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  menuWidth: 350,
  align: 'center',
  refreshBtn: true,
  searchSize: 'mini',
  addBtn: false,
  editBtn: false,
  delBtn: false,
  viewBtn: false,
  props: {
    label: 'label',
    value: 'value'
  },
  column: [
    {
      label: '用户名称',
      prop: 'nickName',
      search: true
    }, {
      label: '年龄',
      prop: 'age',
      search: true
    }, {
      label: '性别',
      prop: 'sex',
      slot: true
    }, {
      label: '身高',
      prop: 'height'
    }, {
      label: '自我介绍',
      prop: 'introduction'
    },{
      label:"状态",
      prop:"status",
      slot:true
    },{
      label: '体重',
      prop: 'weight'
    },{
      label: '微信号',
      prop: 'wxId'
    }
  ]
}
