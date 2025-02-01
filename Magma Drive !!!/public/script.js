

const { createClient } = supabase;

const supabaseUrl = 'https://jhvfkzpgbgsupjxnzabz.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpodmZrenBnYmdzdXBqeG56YWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzMzAzNDIsImV4cCI6MjA1MzkwNjM0Mn0.smsBo9MAi1UBHr_ZOyJZ5DXqQRA0jkfeB1X7PQuflbI'; // Replace with your anon key // Replace with your anon key
const supabaseClient = createClient(supabaseUrl, supabaseKey);

console.log('Supabase initialized:', supabaseClient); // Debugging: Check if Supabase is initialized

// Function to upload file
async function uploadFile() {
  const fileInput = document.getElementById('dropzone-file');
  const file = fileInput.files[0];

  if (!file) {
    alert('Please select a file to upload.');
    return;
  }

  console.log('File selected:', file.name);

  const { data, error } = await supabaseClient
    .storage
    .from('Magma-Drive') // Replace with your bucket name
    .upload(`uploads/${file.name}`, file);

  if (error) {
    console.error('Error uploading file:', error);
    alert('Upload failed. Check console for details.');
  } else {
    console.log('File uploaded successfully:', data);
    alert('File uploaded successfully!');
  }
}