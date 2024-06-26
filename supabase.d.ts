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
          room_id: string
          text: string | null
          user: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          room_id: string
          text?: string | null
          user?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          room_id?: string
          text?: string | null
          user?: string | null
        }
        Relationships: []
      }
      comment_table: {
        Row: {
          comment: string | null
          content_id: number | null
          created_at: string
          id: number
          user_id: number | null
        }
        Insert: {
          comment?: string | null
          content_id?: number | null
          created_at?: string
          id?: number
          user_id?: number | null
        }
        Update: {
          comment?: string | null
          content_id?: number | null
          created_at?: string
          id?: number
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "comment_table_content_id_fkey"
            columns: ["content_id"]
            isOneToOne: false
            referencedRelation: "community"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comment_table_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_table"
            referencedColumns: ["id"]
          },
        ]
      }
      community: {
        Row: {
          content: string | null
          created_at: string
          id: number
          title: string | null
          user_id: number | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: number
          title?: string | null
          user_id?: number | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: number
          title?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "community_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_table"
            referencedColumns: ["id"]
          },
        ]
      }
      follow_table: {
        Row: {
          created_at: string
          from: number
          id: number
          to: number
        }
        Insert: {
          created_at?: string
          from?: number
          id?: number
          to?: number
        }
        Update: {
          created_at?: string
          from?: number
          id?: number
          to?: number
        }
        Relationships: []
      }
      like: {
        Row: {
          content_id: number
          created_at: string
          from_id: number | null
          id: number
        }
        Insert: {
          content_id: number
          created_at?: string
          from_id?: number | null
          id?: number
        }
        Update: {
          content_id?: number
          created_at?: string
          from_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "like_content_id_fkey"
            columns: ["content_id"]
            isOneToOne: false
            referencedRelation: "community"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "like_from_id_fkey"
            columns: ["from_id"]
            isOneToOne: false
            referencedRelation: "user_table"
            referencedColumns: ["id"]
          },
        ]
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
      uploadVideo: {
        Row: {
          created_at: string
          id: number
          publicUrl: string | null
          user_id: number | null
          video_name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          publicUrl?: string | null
          user_id?: number | null
          video_name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          publicUrl?: string | null
          user_id?: number | null
          video_name?: string | null
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
          streamer: number | null
        }
        Insert: {
          category?: string | null
          id?: number
          link?: string | null
          Name?: string | null
          streamer?: number | null
        }
        Update: {
          category?: string | null
          id?: number
          link?: string | null
          Name?: string | null
          streamer?: number | null
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
