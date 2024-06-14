export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      category: {
        Row: {
          category_id: number | null
          category_name: string | null
          created_at: string
          id: number
        }
        Insert: {
          category_id?: number | null
          category_name?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          category_id?: number | null
          category_name?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      chat_data: {
        Row: {
          created_at: string
          id: number
          text: string | null
          user: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          text?: string | null
          user?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          text?: string | null
          user?: string | null
        }
        Relationships: []
      }
      test: {
        Row: {
          created_at: string
          id: number
          link: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          link?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          link?: string | null
        }
        Relationships: []
      }
      user_avatar: {
        Row: {
          created_at: string
          id: number
          image_id: number | null
          user_id: string | null
          user_name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          image_id?: number | null
          user_id?: string | null
          user_name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          image_id?: number | null
          user_id?: string | null
          user_name?: string | null
        }
        Relationships: []
      }
      user_table: {
        Row: {
          created_at: string
          id: number
          partner_set: boolean
          user_id: string | null
          user_name: string | null
          user_password: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          partner_set?: boolean
          user_id?: string | null
          user_name?: string | null
          user_password?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          partner_set?: boolean
          user_id?: string | null
          user_name?: string | null
          user_password?: string | null
        }
        Relationships: []
      }
      video_list: {
        Row: {
          category: string | null
          id: number
          link: string | null
          Name: string | null
          streamer: string | null
        }
        Insert: {
          category?: string | null
          id?: number
          link?: string | null
          Name?: string | null
          streamer?: string | null
        }
        Update: {
          category?: string | null
          id?: number
          link?: string | null
          Name?: string | null
          streamer?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
