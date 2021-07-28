export const userlabel = {
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
    label: '标签名称',
    prop: 'text',
    search: true
  }, {
    label: '操作人',
    prop: 'nickName',
    search: true
  },{
    label: '时间',
    prop: 'time'
  },{
    label: '状态',
    prop: 'status',
    dicData: [
      {
        label: '未审核',
        value: 0
      }, {
        label: '审核通过',
        value: 1
      }, {
        label: '审核未通过',
        value: 2
      }
    ]
  }
]
}
