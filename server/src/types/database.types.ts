export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      Media: {
        Row: {
          category: string | null;
          created_at: string;
          id: number;
          isTrending: boolean | null;
          rating: string | null;
          regularImageURL: string | null;
          title: string | null;
          trendingImageURL: string | null;
          year: number | null;
        };
        Insert: {
          category?: string | null;
          created_at?: string;
          id?: number;
          isTrending?: boolean | null;
          rating?: string | null;
          regularImageURL?: string | null;
          title?: string | null;
          trendingImageURL?: string | null;
          year?: number | null;
        };
        Update: {
          category?: string | null;
          created_at?: string;
          id?: number;
          isTrending?: boolean | null;
          rating?: string | null;
          regularImageURL?: string | null;
          title?: string | null;
          trendingImageURL?: string | null;
          year?: number | null;
        };
        Relationships: [];
      };
      User: {
        Row: {
          created_at: string;
          email: string;
          id: number;
          password: string;
        };
        Insert: {
          created_at?: string;
          email: string;
          id?: number;
          password: string;
        };
        Update: {
          created_at?: string;
          email?: string;
          id?: number;
          password?: string;
        };
        Relationships: [];
      };
      UserBookmarked: {
        Row: {
          created_at: string;
          id: number;
          media_id: number;
          user_id: number;
        };
        Insert: {
          created_at?: string;
          id?: number;
          media_id: number;
          user_id: number;
        };
        Update: {
          created_at?: string;
          id?: number;
          media_id?: number;
          user_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "UserBookmarked_media_id_fkey";
            columns: ["media_id"];
            isOneToOne: false;
            referencedRelation: "Media";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "UserBookmarked_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "User";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] & Database["public"]["Views"])
  ? (Database["public"]["Tables"] & Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof Database["public"]["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof Database["public"]["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof Database["public"]["Enums"] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never;
