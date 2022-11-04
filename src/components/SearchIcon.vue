<template>
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.6875 15.375C3.45 15.375 0 11.925 0 7.6875C0 3.45 3.45 0 7.6875 0C11.925 0 15.375
        3.45 15.375 7.6875C15.375 11.925 11.925 15.375 7.6875 15.375ZM7.6875 1.125C4.065 1.125
        1.125 4.0725 1.125 7.6875C1.125 11.3025 4.065 14.25 7.6875 14.25C11.31 14.25 14.25
        11.3025 14.25 7.6875C14.25 4.0725 11.31 1.125 7.6875 1.125Z"
        :fill="color ? color : theme === 'light' ? '#292D32' : '#fff'"
        @mouseover="isHover = true;"
        @mouseout="isHover = false;"
      />
      <path
        d="M15.5626 16.1251C15.4201 16.1251 15.2776 16.0726 15.1651 15.9601L13.6651 14.4601C13.4476
        14.2426 13.4476 13.8826 13.6651 13.6651C13.8826 13.4476 14.2426 13.4476 14.4601
        13.6651L15.9601 15.1651C16.1776 15.3826 16.1776 15.7426 15.9601 15.9601C15.8476 16.0726
        15.7051 16.1251 15.5626 16.1251Z"
        :fill="color ? color : theme === 'light' ? '#292D32' : '#fff'"
        @mouseover="isHover = true;"
        @mouseout="isHover = false;"
      />
    </svg>
  </template>
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters({ theme: 'getTheme' }),
    },
    data() {
      return {
        isHover: false,
      };
    },
    props: {
      color: {
        type: String,
      },
    },
  };
  </script>
  