
<template>
  <div>
    <p class="title">ยอดค้างทั้งหมด</p>
    <div class="card">
      <div class="card-content">
        <p class="title">{{ summary.name }}</p>
        <div class="content">
          <ul v-if="summary.unpaidlist.length > 0">
            <li v-for="unpaid in summary.unpaidlist" :key="unpaid.creditor">
              ชื่อ {{ unpaid.creditor }} จำนวนเงิน {{ unpaid.amount }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "summaryCard",
  props: ["summary"],
  data() {
    return {};
  },
};
</script>