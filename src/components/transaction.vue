<template>
  <div class="column">
    <div :id="transaction.id" class="card">
      <div class="card-content">
        <div class="content">
          <p>ผู่ยืม :{{ transaction.name }}</p>
          <p>เจ้าหนี้ :{{ transaction.creditor }}</p>
          <p>จำนวนเงิน :{{ transaction.amount }}</p>
          <p>
            คืนแล้ว :
            <b-icon
              v-if="transaction.isRepay === false"
              icon="fa-solid fa-times"
              size="is-small"
            >
            </b-icon>
            <b-icon v-else icon="far fa-check" size="is-small"></b-icon>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "transaction",
  props: ["transaction"],
  data() {
    return {};
  },
};
</script>