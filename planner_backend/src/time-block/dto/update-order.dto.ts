import { IsArray, IsString } from 'class-validator'

export class UpdateOrderdto {
	@IsArray()
	@IsString({ each: true })
	ids: string[]
}
