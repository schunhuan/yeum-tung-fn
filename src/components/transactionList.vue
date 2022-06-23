
<template>
  <div>
    <section>
      <b-field>
        <b-input
          placeholder="ผู้ยืม..."
          type="search"
          v-model="searchText"
        ></b-input>
        <p class="control">
          <b-button class="button is-primary" @click="onSearch"
            >Search</b-button
          >
        </p>
      </b-field>
    </section>
    <div v-if="UnpaidSummaryData.unpaidlist">
      <hr />
      <summaryCard :summary="UnpaidSummaryData" />
    </div>
    <div v-if="transactionsData.length > 0" transactionsData>
      <hr />
      <p class="title">Transaction ของการ ยืม / คืน</p>
      <div class="columns">
        <transaction
          v-for="transaction in transactionsData"
          :transaction="transaction"
          :key="transaction.Id"
        />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import transaction from "./transaction";
import summaryCard from "./summaryCard";

async function getData(param) {
  let endpoint = `http://localhost:3005/report/transaction/${param}`; //`${process.env.API_DOMAIN}/report/transaction/${param}`;
  return await axios
    .get(endpoint)
    .then(function (response) {
      return response.data;
    })
    .catch(function (resJson) {
      console.log(resJson);
      return [];
    });
}

async function getUnpaidSummary(param) {
  let endpoint = `http://localhost:3005/report/unPaid/${param}`; //`${process.env.API_DOMAIN}/report/transaction/${param}`;
  return await axios
    .get(endpoint)
    .then(function (response) {
      console.log(response.data);
      return response.data.result;
    })
    .catch(function (resJson) {
      console.log(resJson);
      return {};
    });
}

export default {
  name: "transactionList",
  data() {
    return {
      transactionsData: [],
      UnpaidSummaryData: {},
      searchText: "",
    };
  },

  components: {
    transaction,
    summaryCard,
  },
  async mounted() {
    this.transactionsData = await getData(this.searchText);
  },
  methods: {
    onSearch: async function () {
      this.transactionsData = await getData(this.searchText);
      if (this.searchText != "") {
        this.UnpaidSummaryData = await getUnpaidSummary(this.searchText);
      } else {
        this.UnpaidSummaryData = {};
      }
    },
  },
};
</script>