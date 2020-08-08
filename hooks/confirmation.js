export async function getConfirmation(id) {
  let data;
  let error;
  try {
    const response = await fetch(`${process.env.api}ordenes/${id}/success`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 1,
      }),
    });

    data = await response.json();
  } catch (err) {
    error = err;
  }

  return {
    error,
    data,
  };
}
