export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  __InternalSupabase: { PostgrestVersion: "14.15" };
  public: {
    Tables: {
      profiles: {
        Row: { user_id: string; display_name: string | null; timezone: string; created_at: string; updated_at: string };
        Insert: { user_id: string; display_name?: string | null; timezone?: string; created_at?: string; updated_at?: string };
        Update: { display_name?: string | null; timezone?: string; updated_at?: string };
        Relationships: [];
      };
      check_ins: {
        Row: { id: number; user_id: string; check_in_date: string; sleep: number; energy: number; mood: number; goal: string; recovery_score: number; recovery_level: string; insights: Json; created_at: string; updated_at: string };
        Insert: { id?: never; user_id: string; check_in_date: string; sleep: number; energy: number; mood: number; goal?: string; recovery_score: number; recovery_level: string; insights?: Json; created_at?: string; updated_at?: string };
        Update: { id?: never; user_id?: string; check_in_date?: string; sleep?: number; energy?: number; mood?: number; goal?: string; recovery_score?: number; recovery_level?: string; insights?: Json; created_at?: string; updated_at?: string };
        Relationships: [];
      };
      morning_briefs: {
        Row: { id: number; user_id: string; check_in_id: number; brief_date: string; title: string; summary: string; action: string; output: Json; model: string; created_at: string };
        Insert: { id?: never; user_id: string; check_in_id: number; brief_date: string; title: string; summary: string; action: string; output: Json; model: string; created_at?: string };
        Update: { id?: never; user_id?: string; check_in_id?: number; brief_date?: string; title?: string; summary?: string; action?: string; output?: Json; model?: string; created_at?: string };
        Relationships: [{ foreignKeyName: "morning_briefs_check_in_id_fkey"; columns: ["check_in_id"]; isOneToOne: true; referencedRelation: "check_ins"; referencedColumns: ["id"] }];
      };
      waitlist: {
        Row: { id: string; email: string; created_at: string };
        Insert: { id?: string; email: string; created_at?: string };
        Update: { id?: string; email?: string; created_at?: string };
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};
