import { Link } from 'react-router-dom'
import { UserPlus } from 'lucide-react'

export default function Register() {
  return (
    <section className="py-24">
      <div className="max-w-[480px] mx-auto px-6">
        <div className="text-center mb-10">
          <div className="w-14 h-14 mx-auto mb-4 bg-[#C8963E] rounded-2xl flex items-center justify-center text-white"><UserPlus size={24} /></div>
          <h2 className="text-2xl font-bold tracking-tight">회원가입</h2>
          <p className="text-sm text-gray-500 mt-2">뉴저지제일한인교회 홈페이지 회원가입</p>
        </div>

        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">이름</label>
              <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A5C] focus:ring-2 focus:ring-[#1B3A5C]/10 transition-all" placeholder="이름" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">아이디</label>
              <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A5C] focus:ring-2 focus:ring-[#1B3A5C]/10 transition-all" placeholder="아이디" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">이메일</label>
            <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A5C] focus:ring-2 focus:ring-[#1B3A5C]/10 transition-all" placeholder="이메일 주소" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">비밀번호</label>
            <input type="password" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A5C] focus:ring-2 focus:ring-[#1B3A5C]/10 transition-all" placeholder="비밀번호 (8자 이상)" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">비밀번호 확인</label>
            <input type="password" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A5C] focus:ring-2 focus:ring-[#1B3A5C]/10 transition-all" placeholder="비밀번호 확인" />
          </div>
          <button type="submit" className="w-full py-3 bg-[#C8963E] text-white font-semibold text-sm rounded-full hover:bg-amber-700 transition-colors">회원가입</button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          이미 회원이신가요?{' '}
          <Link to="/login" className="text-[#1B3A5C] font-semibold hover:text-[#2A5A8C]">로그인</Link>
        </p>
      </div>
    </section>
  )
}
