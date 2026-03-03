<template>
  <div>模擬獎勵</div>
  <!-- 成員列表 -->
  <div class="departments">
    <div v-for="dept in departments" :key="dept.name">
      <h3>{{ dept.name }}({{ dept.members.length }})</h3>

      <div v-for="member in dept.members" :key="member.id" class="memberName">
        {{ member.name }}
        <button v-if="dept.name !== '尚未加入部門'" @click="moveToUnassigned(member)">
          移除部門
        </button>

        <div v-if="dept.name === '尚未加入部門'">
          <button @click="addToDepartment(member, '傳送使')">傳送使</button>
          <button @click="addToDepartment(member, '禦防使')">禦防使</button>
          <button @click="addToDepartment(member, '研修使')">研修使</button>
          <button @click="addToDepartment(member, '調停使')">調停使</button>
        </div>
      </div>
    </div>
  </div>
  <div class="reward">
    <div v-for="dept in departments" :key="dept.name">
      <template v-if="dept.name !== '尚未加入部門'">
        <div class="textmagrn">{{ dept.name }} - 獎勵</div>

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

<style scoped>
.departments {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.reward {
  display: flex;
}

.textmagrn {
  margin-right: 40px;
}

.memberName {
  display: flex;
}
</style>
