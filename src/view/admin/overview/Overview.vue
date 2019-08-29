<style scoped lang="less">
@import url('./index.less');
</style>
<template>
  <div class="overview">
    <div class="ov-filter-wrapper">
      <Row class="ov-filter-content">
        <Col span="8" class="ov-filter-item"><span>项目类型:</span><Input v-model="value1" placeholder="Enter something..." clearable/></Col>
        <Col span="8" class="ov-filter-item"><span>部门:</span><Input v-model="value2" placeholder="Enter something..." clearable/></Col>
        <Col span="8" class="ov-filter-item"><span>工作地点:</span><Input v-model="value3" placeholder="Enter something..." clearable/></Col>
      </Row>
      <Button type="primary" size="small">筛选</Button>
    </div>
    <br>
    <br>
    <p>
      <span>全部：<router-link :to="{ path: '/admin/test1', query: { page: 1, status: 1 } }">6013</router-link></span>
      <span>未处理：<router-link :to="{ path: '/admin/test1', query: { page: 1, status: 2 } }">5822</router-link></span>
      <span>通过：<router-link :to="{ path: '/admin/test1', query: { page: 1, status: 3 } }">175</router-link></span>
      <span>未通过：<router-link :to="{ path: '/admin/test1', query: { page: 1, status: 4 } }">16</router-link></span>
      <span>岗位总计：<router-link :to="{ path: '/admin/test1', query: { page: 1, status: 5 } }">256</router-link></span>
      <span>招聘总人数：<router-link :to="{ path: '/admin/test1', query: { page: 2, status: 1 } }">375</router-link></span>
    </p>
    <Table height="400" :columns="columns" :data="data" size="small"></Table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value1: '',
      value2: '',
      value3: '',
      columns: [
        {
          type: 'selection',
          width: 32,
          align: 'left'
        },
        {
          title: 'JID',
          key: 'jid',
          width: 60
        },
        {
          title: '岗位名称',
          key: 'name',
          width: 200
        },
        {
          title: '部门',
          key: 'department'
        },
        {
          title: '工作地点',
          key: 'places'
        },
        {
          title: '招聘人数',
          key: 'number'
        },
        {
          title: '投递量',
          key: 'all'
        },
        {
          title: '通过量',
          key: 'status1'
        },
        {
          title: '在线测评',
          key: 'nowstatus1'
        },
        {
          title: '在线笔试',
          key: 'nowstatus2'
        },
        {
          title: '一面',
          key: 'nowstatus4'
        },
        {
          title: 'offer',
          key: 'nowstatus7'
        }
      ],
      data: [
        {
          jid: '2',
          name: '系统软件测试工程师（日语）',
          department: 'PCSD',
          places: '北京',
          number: '15',
          all: '218',
          status1: '6',
          nowstatus1: '0',
          nowstatus2: '0',
          nowstatus4: '0',
          nowstatus7: '0'
        },
        {
          jid: '2',
          name: '系统软件测试工程师（日语）',
          department: 'PCSD',
          places: '北京',
          number: '15',
          all: '218',
          status1: '6',
          nowstatus1: '0',
          nowstatus2: '0',
          nowstatus4: '0',
          nowstatus7: '0'
        },
        {
          jid: '2',
          name: '系统软件测试工程师（日语）',
          department: 'PCSD',
          places: '北京',
          number: '15',
          all: '218',
          status1: '6',
          nowstatus1: '0',
          nowstatus2: '0',
          nowstatus4: '0',
          nowstatus7: '0'
        },
        {
          jid: '2',
          name: '系统软件测试工程师（日语）',
          department: 'PCSD',
          places: '北京',
          number: '15',
          all: '218',
          status1: '6',
          nowstatus1: '0',
          nowstatus2: '0',
          nowstatus4: '0',
          nowstatus7: '0'
        },
        {
          jid: '2',
          name: '系统软件测试工程师（日语）',
          department: 'PCSD',
          places: '北京',
          number: '15',
          all: '218',
          status1: '6',
          nowstatus1: '0',
          nowstatus2: '0',
          nowstatus4: '0',
          nowstatus7: '0'
        },
        {
          jid: '2',
          name: '系统软件测试工程师（日语）',
          department: 'PCSD',
          places: '北京',
          number: '15',
          all: '218',
          status1: '6',
          nowstatus1: '0',
          nowstatus2: '0',
          nowstatus4: '0',
          nowstatus7: '0'
        },
        {
          jid: '2',
          name: '系统软件测试工程师（日语）',
          department: 'PCSD',
          places: '北京',
          number: '15',
          all: '218',
          status1: '6',
          nowstatus1: '0',
          nowstatus2: '0',
          nowstatus4: '0',
          nowstatus7: '0'
        },
        {
          jid: '2',
          name: '系统软件测试工程师（日语）',
          department: 'PCSD',
          places: '北京',
          number: '15',
          all: '218',
          status1: '6',
          nowstatus1: '0',
          nowstatus2: '0',
          nowstatus4: '0',
          nowstatus7: '0'
        },
        {
          jid: '2',
          name: '系统软件测试工程师（日语）',
          department: 'PCSD',
          places: '北京',
          number: '15',
          all: '218',
          status1: '6',
          nowstatus1: '0',
          nowstatus2: '0',
          nowstatus4: '0',
          nowstatus7: '0'
        },
        {
          jid: '2',
          name: '系统软件测试工程师（日语）',
          department: 'PCSD',
          places: '北京',
          number: '15',
          all: '218',
          status1: '6',
          nowstatus1: '0',
          nowstatus2: '0',
          nowstatus4: '0',
          nowstatus7: '0'
        },
        {
          jid: '2',
          name: '系统软件测试工程师（日语）',
          department: 'PCSD',
          places: '北京',
          number: '15',
          all: '218',
          status1: '6',
          nowstatus1: '0',
          nowstatus2: '0',
          nowstatus4: '0',
          nowstatus7: '0'
        },
        {
          jid: '2',
          name: '系统软件测试工程师（日语）',
          department: 'PCSD',
          places: '北京',
          number: '15',
          all: '218',
          status1: '6',
          nowstatus1: '0',
          nowstatus2: '0',
          nowstatus4: '0',
          nowstatus7: '0'
        },
        {
          jid: '2',
          name: '系统软件测试工程师（日语）',
          department: 'PCSD',
          places: '北京',
          number: '15',
          all: '218',
          status1: '6',
          nowstatus1: '0',
          nowstatus2: '0',
          nowstatus4: '0',
          nowstatus7: '0'
        },
        {
          jid: '2',
          name: '系统软件测试工程师（日语）',
          department: 'PCSD',
          places: '北京',
          number: '15',
          all: '218',
          status1: '6',
          nowstatus1: '0',
          nowstatus2: '0',
          nowstatus4: '0',
          nowstatus7: '0'
        },
        {
          jid: '2',
          name: '系统软件测试工程师（日语）',
          department: 'PCSD',
          places: '北京',
          number: '15',
          all: '218',
          status1: '6',
          nowstatus1: '0',
          nowstatus2: '0',
          nowstatus4: '0',
          nowstatus7: '0'
        },
        {
          jid: '2',
          name: '系统软件测试工程师（日语）',
          department: 'PCSD',
          places: '北京',
          number: '15',
          all: '218',
          status1: '6',
          nowstatus1: '0',
          nowstatus2: '0',
          nowstatus4: '0',
          nowstatus7: '0'
        },
        {
          jid: '2',
          name: '系统软件测试工程师（日语）',
          department: 'PCSD',
          places: '北京',
          number: '15',
          all: '218',
          status1: '6',
          nowstatus1: '0',
          nowstatus2: '0',
          nowstatus4: '0',
          nowstatus7: '0'
        },
        {
          jid: '2',
          name: '系统软件测试工程师（日语）',
          department: 'PCSD',
          places: '北京',
          number: '15',
          all: '218',
          status1: '6',
          nowstatus1: '0',
          nowstatus2: '0',
          nowstatus4: '0',
          nowstatus7: '0'
        },
      ]
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
