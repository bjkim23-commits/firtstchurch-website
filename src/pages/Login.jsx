import { Link } from 'react-router-dom'
import { LogIn } from 'lucide-react'

export default function Login() {
  return (
    <section className="py-24">
      <div className="max-w-[400px] mx-auto px-6">
        <div className="text-center mb-10">
          <div className="w-14 h-14 mx-auto mb-4 bg-[#1B3A5C] rounded-2xl flex items-center justify-center text-white"><LogIn size={24} /></div>
          <h2 className="text-2xl font-bold tracking-tight">로그인</h2>
          <p className="text-sm text-gray-500 mt-2">뉴저지제일한인교회 회원 로그인</p>
        </div>

        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium mb-1.5">아이디</label>
            <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A5C] focus:ring-2 focus:ring-[#1B3A5C]/10 transition-all" placeholder="아이디를 입력하세요" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">비밀번호</label>
            <input type="password" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A5C] focus:ring-2 focus:ring-[#1B3A5C]/10 transition-all" placeholder="비밀번호를 입력하세요" />
          </div>
          <button type="submit" className="w-full py-3 bg-[#1B3A5C] text-white font-semibold text-sm rounded-full hover:bg-[#2A5A8C] transition-colors">로그인</button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          아직 회원이 아니신가요?{' '}
          <Link to="/register" className="text-[#1B3A5C] font-semibold hover:text-[#2A5A8C]">회원가입</Link>
        </p>
      </div>
    </section>
  )
}
