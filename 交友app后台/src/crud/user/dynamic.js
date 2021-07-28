export const dynamic = {
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
    prop: 'userName'
  }, {
    label: '用户头像',
    prop: 'userPic'
  }, {
    label: '动态状态',
    prop: 'status',
    search: true,
    type: 'select',
    slot: false,
    dicData: [
      {
        label: '正常',
        value: 1
      }, {
        label: '禁止显示',
        value: 2
      }
    ]
  }, {
    label: '提交时间',
    prop: 'datetime'
  }, {
    label: '图片列',
    prop: 'pics'
  }, {
    label: '操作人',
    prop: 'operator'
  }, {
    label: '喜欢',
    prop: 'likeNum'
  }, {
    label: '动态状态',
    prop: 'isDel',
    type:"select",
    search: true,
    dicData: [
      {
        label: '未删除',
        value: 0
      }, {
        label: '已删除',
        value: 1
      }
    ]
  }, {
    label: '创建时间',
    prop: 'createTime'
  }, {
    label: '文本内容',
    prop: 'content'
  }, {
    label: '操作备注',
    prop: 'comment'
    }
  ]
}
