<template>
  <!-- 成員列表 -->
  <div class="flex justify-center mt-7 gap-7 20">
    <div v-for="dept in departments" :key="dept.name">
      <h3>{{ dept.name }}({{ dept.members.length }})</h3>

      <div v-for="member in dept.members" :key="member.id">
        <div class="flex">
          <div class="m-1">{{ member.name }}</div>
          <button
            v-if="dept.name !== '尚未加入部門'"
            @click="moveToUnassigned(member)"
            class="btn-danger"
          >
            移除
          </button>

          <div v-if="dept.name === '尚未加入部門'">
            <button @click="addToDepartment(member, '傳送使')" class="btn">傳送使</button>
            <button @click="addToDepartment(member, '禦防使')" class="btn">禦防使</button>
            <button @click="addToDepartment(member, '研修使')" class="btn">研修使</button>
            <button @click="addToDepartment(member, '調停使')" class="btn">調停使</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center gap-8">
    <div v-for="dept in departments" :key="dept.name">
      <template v-if="dept.name !== '尚未加入部門'">
        <div>{{ dept.name }} - 獎勵</div>

        <div v-for="reward in rewards[dept.name]" :key="reward">
          {{ reward }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts" name="Content">
import { useMemberstore } from '@/stores/members'
import { storeToRefs } from 'pinia'
import { reactive, onMounted, computed } from 'vue'

const userMemberstore = useMemberstore()
const { members } = storeToRefs(userMemberstore)

const departments = reactive([
  { name: '傳送使', members: [] as any[], limit: 5 },
  { name: '禦防使', members: [] as any[], limit: 5 },
  { name: '研修使', members: [] as any[], limit: 5 },
  { name: '調停使', members: [] as any[], limit: 5 },
  { name: '尚未加入部門', members: [] as any[], limit: 999 },
])

const rewards = computed(() => {
  const result: Record<string, string[]> = {}

  departments.forEach((dept) => {
    if (dept.name === '尚未加入部門') return

    result[dept.name] = dept.members.map((member) => {
      return member[dept.name]
    })
  })

  return result
})

function moveToUnassigned(member: any) {
  const unassigned = departments.find((d) => d.name === '尚未加入部門')
  if (!unassigned) return

  departments.forEach((d) => {
    d.members = d.members.filter((m) => m.id !== member.id)
  })

  unassigned.members.push(member)
}

function addToDepartment(member: any, deptName: string) {
  const targetDept = departments.find((d) => d.name === deptName)
  const unassigned = departments.find((d) => d.name === '尚未加入部門')

  if (!targetDept || !unassigned) return

  const totalOnField = departments
    .filter((d) => d.name !== '尚未加入部門')
    .reduce((sum, d) => sum + d.members.length, 0)

  if (totalOnField >= 14) {
    alert('場上最多 14 人')
    return
  }

  if (targetDept.members.length >= targetDept.limit) {
    alert(`${deptName} 已滿`)
    return
  }

  departments.forEach((d) => {
    d.members = d.members.filter((m) => m.id !== member.id)
  })

  targetDept.members.push(member)
}

onMounted(() => {
  const unassigned = departments.find((d) => d.name === '尚未加入部門')
  unassigned!.members.push(...members.value)
})
</script>

<style scoped></style>
