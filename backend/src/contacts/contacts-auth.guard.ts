import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly config: ConfigService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const bearerToken = this.config.get('BEARER_TOKEN');
    const request = context.switchToHttp().getRequest();
    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    if (type !== 'Bearer') return false;

    if (bearerToken === token) return true;
    else return false;
  }
}
