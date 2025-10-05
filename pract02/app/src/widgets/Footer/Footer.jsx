export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-12 py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <span>© 2025 Магазинчик(</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-800">Политика и беЖОПАсность</a>
          <a href="#" className="hover:text-gray-800">Cookie</a>
        </div>
      </div>
    </footer>
  )
}