<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MainController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig');
    }

    // Présentation

    #[Route('/presentation', name:'aboutme')]
    public function presentation(): Response
    {
        return $this->render('home/aboutme.html.twig');
    }

    // Parcours

    #[Route('/parcours', name:'career')]
    public function parcours(): Response
    {
        return $this->render('home/career.html.twig');
    }

    // Compétences

    // Wordpress

    #[Route('/wordpress', name:'wordpress')]
    public function wordpress(): Response
    {
        return $this->render('home/wordpress.html.twig');
    }


}
