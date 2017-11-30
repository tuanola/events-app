<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              Modal
            </slot>
            <button type="button" class="close" @click="$emit('close')">
              <span>&times;</span>
            </button>
          </div>

          <div class="modal-body text-left">
            <slot name="body">
              Content
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <a href="#" class="btn btn-primary" @click="$emit('close')">OK</a>
              <a href="#" class="btn btn-light" @click="$emit('close')">Cancel</a>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 800px;
  margin: 10px auto;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  color: #000;
}

.modal-header h3 {
  margin: 0;
  padding: 0;
  color: #000;
}

.modal-body {
  height: calc(100vh - 200px);
  margin: 10px 0;
  overflow: auto;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

<script>
</script>
