<template>
  <input type="checkbox" class="checkbox" />
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.checkbox {
  margin-right: 28px;
  margin-bottom: 28px;
  max-height: 0;
  max-width: 0;
  min-height: 0;
  min-width: 0;
  height: 0;
  width: 0;
  overflow: visible;
  position: relative;
  cursor: pointer;
  &::before {
    content: "";
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    max-width: 28px;
    max-height: 28px;
    min-width: 28px;
    min-height: 28px;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    transition: 0.4s;
  }
  &::after {
    content: "";
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    max-width: 28px;
    max-height: 28px;
    min-width: 28px;
    min-height: 28px;
    border-radius: 5px;
    background: url("/check_box.svg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    transition: 0.3s;
    transform: scale(0);
  }
  &:checked {
    &::before {
      border-color: #2c5de5;
      box-shadow: inset 0 0 0 14px #2c5de5, 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    &::after {
      transform: scale(1);
    }
  }
}
</style>
