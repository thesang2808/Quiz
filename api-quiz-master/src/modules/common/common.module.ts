import {Module, Global} from '@nestjs/common';
import {CachingModule} from './caching/caching.module';
import {configProviders} from './config.provider';

const modules = [CachingModule];

@Global()
@Module({
  imports: modules,
  providers: [...configProviders],
  exports: [...modules, ...configProviders],
})
export class CommonModule {}
