<template>
  <div>獎勵一覽</div>

  <div>
    <table>
      <thead>
        <tr>
          <th>成員</th>
          <th v-for="items in departments">
            {{ items }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in members" :key="member.id">
          <td>{{ member.name }}</td>
          <td>{{ member.傳送使 }}</td>
          <td>{{ member.禦防使 }}</td>
          <td>{{ member.研修使 }}</td>
          <td>{{ member.調停使 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts" name="Award">
import { useMemberstore } from '@/stores/members'
import { storeToRefs } from 'pinia'

const userMemberstore = useMemberstore()
const { members } = storeToRefs(userMemberstore)

const departments = ['傳送使', '禦防使', '研修使', '調停使']
</script>

<style scoped></style>
