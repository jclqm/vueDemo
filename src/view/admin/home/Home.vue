<style scoped>
@import url("./index.less");
</style>
<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']"  @on-select="turnToPage">
          <template v-for="(sitem, index) in menuList">
            <Submenu v-if="sitem.children && sitem.children.length" :name="sitem.name" :key="index">
              <template slot="title">
                <Icon :type="sitem.meta.icon"></Icon><span>{{sitem.name}}</span>
              </template>
              <template v-if="sitem.children && sitem.children.length">
                <MenuItem :name="`${sitem.name}-${mitem.name}`" v-for="(mitem, i) in sitem.children" :key="`${index}-${i}`"><Icon :type="mitem.meta.icon"></Icon><span>{{mitem.name}}</span></MenuItem>
              </template>
            </Submenu>
            <MenuItem v-else :name="sitem.name" :key="index"><Icon :type="sitem.meta.icon"></Icon><span>{{sitem.name}}</span></MenuItem>
          </template>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{margin: '0 20px'}"
            type="md-menu"
            size="24"
          ></Icon>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isCollapsed: false
    }
  },
  computed: {
    rotateIcon () {
      return ['menu-icon', this.isCollapsed ? 'rotate-icon' : '']
    },
    menuitemClasses () {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : '']
    },
    menuList () {
      console.log(this.$store.getters.menuList)
      return this.$store.getters.menuList
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    },
    turnToPage (route) {
      console.log(route)
      if (route.indexOf('overview') > -1) {
        this.$router.push({path: '/admin/overview'})
      } else {
        this.$router.push({path: '/admin/test1'})
      }
      // console.log(route)
      // let { name, params, query } = {}
      // console.log(name, params, query)
      // if (typeof route === 'string') name = route
      // else {
      //   name = route.name
      //   params = route.params
      //   query = route.query
      // }
      // if (name.indexOf('isTurnByHref_') > -1) {
      //   window.open(name.split('_')[1])
      //   return
      // }
      // this.$router.push({
      //   name,
      //   params,
      //   query
      // })
    }
  }
}
</script>
