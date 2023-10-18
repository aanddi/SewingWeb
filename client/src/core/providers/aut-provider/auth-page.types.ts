import { NextPage } from 'next'

// роли
export type TypeRoles = {
  isOnlyEmployer?: boolean
  isOnlyJobSeeker?: boolean
}

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles

export type TypeComponentAuthFields = {
  Component: TypeRoles
}