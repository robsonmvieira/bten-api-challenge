import { Column, Entity } from 'typeorm'

import TypeormEntityBase from '../../../infra/database/base-classes/typeorm.entity.base'

@Entity('users')
export class UserOrmEntity extends TypeormEntityBase {
  @Column({ nullable: false })
  name: string

  @Column({ unique: true })
  email: string

  @Column({ nullable: false })
  password: string
}
