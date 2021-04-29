import { Column, Entity } from 'typeorm'

import EntityBase from '../../../../infra/database/base-classes/typeorm.entity.base'

@Entity('users')
export class User extends EntityBase {
  @Column({ nullable: false })
  name: string

  @Column({ unique: true })
  email: string

  @Column({ nullable: false })
  password: string
}
