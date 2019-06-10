<template>
  <Table
    height="520"
    :loading="loading"
    border
    :columns="columns"
    :data="data"
    @on-sort-change="sortChange"
  ></Table>
</template>

<script>
import { Table } from "iview";

export default {
  components: { Table },
  data() {
    return {
      childId: "1-1",
      childName: "人员管理",
      parentName: "人员信息",
      columns: [
        {
          title: "工号",
          key: "code",
          sortable: "custom"
        },
        {
          title: "姓名",
          key: "name",
          sortable: "custom"
        },
        {
          title: "血型",
          key: "bloodType"
        },
        {
          title: "联系方式",
          key: "short"
        },
        {
          title: "培训时间",
          key: "safetyTrainingTime",
          sortable: "custom"
        },
        {
          title: "到期时间",
          key: "maturityTime",
          sortable: "custom"
        },
        {
          title: "安全状态",
          key: "safetyStatus",
          sortable: "custom"
        },
        {
          title: "所属公司",
          key: "companyName"
        },
        {
          title: "工种",
          key: "professionName"
        },
        {
          title: "操作",
          key: ""
        }
      ],
      data: [],
      loading: true,
      params: {
        Sidx: "Code",
        Rows: 10
      }
    };
  },
  mounted() {
    this.$emit(
      "listenToParentEvent",
      this.childName,
      this.parentName,
      this.childId
    );
    this.startQuery(this.params);
  },
  methods: {
    sortChange({ columns, key, order }) {
      this.params.Sidx = key;
      this.params.Sord = order=="normal"?"":order;
      this.startQuery(this.params);
    },
    startQuery(params) {
      this.axios
        .get("http://10.9.53.103:5200/api/WorkerManager/GetAllWorkers", {
          params: params
        })
        .then(response => {
          // console.log(response.data);
          this.data = response.data.data;
          this.loading = false;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
