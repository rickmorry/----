export const tableOption = {
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
  column: [{
    label: '用户昵称',
    prop: 'nickName',
    search: true
  }, {
    label: '用户头像',
    prop: 'pic',
    imgWidth: 150,
    slot:true
  }, {
    label: '性别',
    prop: 'sex',
    slot: true
  }, {
    label: '年龄',
    prop: 'age',
  }, {
    label: '余额',
    prop: 'diamondNum',
  }, {
    label: '身高',
    prop: 'height',
  }, {
    label: '体重',
    prop: 'weight',
  }, {
    label: 'vip',
    prop: 'isVip',
    slot:true
  }, {
    label: '状态',
    prop: 'status',
    search: true,
    type: 'select',
    slot: true,
    dicData: [
      {
        label: '禁用',
        value: 0
      }, {
        label: '正常',
        value: 1
      }
    ]

  }
]
}
