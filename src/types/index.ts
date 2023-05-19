import { CSSProperties } from "react"

export interface TabType {
  id: string
  text: string
  icon: string
  tabIndex?: number
}

export interface IconType {
  size?: number
  color?: string
  className?: string
  style?: CSSProperties
}

export interface HobbyType {
  name: string
  description: string
  bgImg: string
  icon?: string
}

export interface JobType {
  title: string
  dateStart: string
  dateEnd: string
  company: string
  companyDetails?: string
  missions: string[]
}

export interface EducationType {
  grade: string
  name: string
  dateStart: string
  dateEnd: string
  school: string
  schoolDetails?: string
}

export interface ProjectType {
  name: string
  details?: string
  isDev: boolean
  dateStart?: string
  dateEnd?: string
  isPaused?: boolean
  isDone?: boolean
  link?: string
}

export interface SkillType {
  name: string
  skills: string[]
}
