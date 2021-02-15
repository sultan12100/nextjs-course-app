export default function errorMessage(error) {
  return { status: error, success: false, message: 'Not Found' }
}
