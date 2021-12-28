import { Pipe, PipeTransform } from '@angular/core'
import { servicesTranslations } from '../../assets/constants'

@Pipe({
  name: 'serviceTranslate'
})
export class ServiceTranslatePipe implements PipeTransform {

  transform(value: string): string {
    const translated = Object.keys(servicesTranslations).includes(value) ? servicesTranslations[value] : undefined
    return translated ? translated : value
  }

}
