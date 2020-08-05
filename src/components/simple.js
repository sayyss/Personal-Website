import React from 'react';
import image from '../media/logo.jpg';
import '../styles/simple.css';
import '../App.css';
import { Row, Col } from 'antd';

export default function Hello() {
    return (
        <div class="HelloParent">

            <div class="ComponentDiv">
                <h1>Hello, I am Sayam Sawai</h1>

                <p>
                    I am a 17 year developer who likes to be lazy blah blah lorem ispump coming at to fill the bio
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    I am a 17 year developer who likes to be lazy blah blah lorem ispump coming at to fill the bio
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                <p>
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

            </div>

            <div class="ComponentDiv">
                
                <h1>What can I do?</h1>

                <p>I develop Web Apps with Flask/Django and unfortunately.. React. </p>

                <p>I make Machine Learning Models Using Pytorch/Scikit-Learn</p>

                <p>I can Do x86/ARM assembly</p>

                <p>I can Develop Mobile Applications Using Flutter and unfortunately React Native</p>

                <p>I can program in C++,Go as well</p>
            </div>

            <div class="ComponentDiv">
                <h1>My Experience</h1>

                <p>Internship at TrioTeachers: I was a remote intern at a small startup that provided Tutors for High school students. 
                    I worked on their FrontEnd System using ReactJS/Firebase.</p>
                
                <p>Google Code-In 2019 Winner: I was one of the 58 winners that won from 2019.</p>
            </div>

            <div class="ComponentDiv">
                <h1>My Projects</h1>

                <p>Github Dashboard: </p>
            </div>
        </div>
    )
}
