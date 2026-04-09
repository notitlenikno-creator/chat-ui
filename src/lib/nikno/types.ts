export type NiknoMode =
  | 'creator_strategy'
  | 'brand_voice'
  | 'ops_automation'
  | 'funding_intelligence'
  | 'casual_conversation';

export interface NiknoRequest {
  input: string;
  mode?: NiknoMode;
  userId?: string;
  metadata?: Record<string, unknown>;
}

export interface NiknoResponse {
  ok: boolean;
  mode: NiknoMode;
  output: string;
  timestamp: string;
}
