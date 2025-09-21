
function footer() {
  return (

    <footer className='bg-gray-900 text-gray-400 py-4 border-t border-gray-800'>
      <div className="text-center text-sm">
        &copy; {new Date().getFullYear()}<span className="text-blue-400 font-semibold"> NoteBook</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default footer