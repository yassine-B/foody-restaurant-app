export const styles = {
  header_container:
    'absolute z-30 flex flex-row justify-between w-full h-12 bg-secondary  px-4 items-center',
  header_overlay: 'w-full z-10 absolute bg-gray-800 h-100vh',
  header_menu_list: 'flex items-center w-24 justify-between',
  header_menu_list_content: 'flex items-center w-14',
  header_menu_button: 'pr-0 pl-0 mt-0',
  header_navigation_list:
    'absolute z-20 w-full bg-primary bg-yellowColor flex flex-col items-center py-6'
};
export const mobileMenuVariants = {
  hidden: { y: '-100%' },
  visible: { y: '48px' }
};
export const mobileIconVariants = {
  open: { rotate: [45, 90] },
  closed: { rotate: 0 }
};
