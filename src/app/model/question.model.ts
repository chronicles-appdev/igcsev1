
export interface QuestionDb {
    id: Number,
    subject_id: Number,
    qyear: string,
    graphics: string,
    questionText: string
}
export interface BooksApi {
  name: string,
  param: {
    student_id: string | null,
    class: string | null
  }
}
export interface BooksApiResult {
  param: {
    id: number,
    book_title: string | null,
    book_img: string | null,
    book_pdf: string | null,
    class: string | null,
    date_created: string | null,
    staff_id: string | null
  
  }
}
export interface BookOff {
  
      ctime?: number | undefined,
      mtime: number | undefined,
      name: string,
      size: number | undefined,
      type: string,
      uri: string,
    
}

export interface PayStatus {
  name: string,
  param: {
    ref: string,
    user_id: number,
    plan: string,
    amount: Number,
    duration: number,

  }
}
