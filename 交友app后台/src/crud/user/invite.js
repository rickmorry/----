export const invitedata = {
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
    label: '邀请人',
    prop: 'nickName',
    search: true
  }, {
    label: '被邀请人',
    prop: 'bynickName',
    search: true
  },{
    label: '时间',
    prop: 'time'
  },{
    label: '被邀请人状态',
    prop: 'bystatus',
    dicData: [
      {
        label: 'vip用户',
        value: 0
      }, {
        label: '普通用户',
        value: 1
      }, {
        label: '高级用户',
        value: 2
      }
    ]
  }
]
}
