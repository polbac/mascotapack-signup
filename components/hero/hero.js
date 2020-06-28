import Link from 'next/link'

export default function Hero() {
  
  return (
    <div class="hero">
      <div className="content">
        <p>vos encargate de amarlos</p>
        <h2 className="display-4 font-weight-bold text-shadow">nosotros nos<br/>encargamos del resto</h2>
        <Link href="/comenzar"><a className="btn btn-lg text-dark h-100 display-4 font-weight-bold rounded-xl btn btn-primary">¡Conocé tu pack!</a></Link>
      </div>
    </div>
  );
}
