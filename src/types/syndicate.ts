export type department = '傳送使' | '禦防使' | '研修使' | ' 調停使' | null

export interface members {
  id: string
  name: string
  department: department
}
