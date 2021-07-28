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
  column: [
    {
      label: '会员天数',
      prop: 'dayCount',
      search: true
    },
    {
      label: '套餐名称',
      prop: 'name',
      search: true
    },
    {
      label: '套餐价格',
      prop: 'price',
      search: true
    }
  ]
}
