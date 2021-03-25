import { InjectionToken } from '@angular/core';
import { AnySchemaObject } from 'ajv';

export const ALL_SCHEMAS = new InjectionToken<AnySchemaObject[]>('ALL_SCHEMAS');

export const ENTRY_SCHEMA = new InjectionToken<AnySchemaObject>('ENTRY_SCHEMA');
